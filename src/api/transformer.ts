export type Beer = {
  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  imageURL: string;
  abv: number;
  ibu: number | null;
  targetFg: number | null;
  targetOg: number | null;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuationLevel: number;
  volume: BoilVolume;
  boilVolume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  foodPairing: string[];
  brewersTips: string;
  contributedBy: string;
};

export type BoilVolume = {
  value: number | null;
  unit: string;
};

export type Ingredients = {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
};

export type Hop = {
  name: string;
  amount: BoilVolume;
  add: string;
  attribute: string;
};

export type Malt = {
  name: string;
  amount: BoilVolume;
};

export type Method = {
  mashTemp: MashTemp[];
  fermentation: Fermentation;
  twist: null | string;
};

export type Fermentation = {
  temp: BoilVolume;
};

export type MashTemp = {
  temp: BoilVolume;
  duration: number | null;
};

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toBeer(json: string): Beer[] {
    return cast(JSON.parse(json), a(r("Beer")));
  }

  public static beerToJson(value: Beer[]): string {
    return JSON.stringify(uncast(value, a(r("Beer"))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(
      val
    )}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = ""
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty("props")
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Beer: o(
    [
      { json: "id", js: "id", typ: 0 },
      { json: "name", js: "name", typ: "" },
      { json: "tagline", js: "tagline", typ: "" },
      { json: "first_brewed", js: "firstBrewed", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "image_url", js: "imageURL", typ: u("", null) },
      { json: "abv", js: "abv", typ: u(3.14, null) },
      { json: "ibu", js: "ibu", typ: u(3.14, null) },
      { json: "target_fg", js: "targetFg", typ: u(0, null) },
      { json: "target_og", js: "targetOg", typ: u(3.14, null) },
      { json: "ebc", js: "ebc", typ: u(0, null) },
      { json: "srm", js: "srm", typ: u(3.14, null) },
      { json: "ph", js: "ph", typ: u(3.14, null) },
      { json: "attenuation_level", js: "attenuationLevel", typ: u(3.14, null) },
      { json: "volume", js: "volume", typ: r("BoilVolume") },
      { json: "boil_volume", js: "boilVolume", typ: r("BoilVolume") },
      { json: "method", js: "method", typ: r("Method") },
      { json: "ingredients", js: "ingredients", typ: r("Ingredients") },
      { json: "food_pairing", js: "foodPairing", typ: a("") },
      { json: "brewers_tips", js: "brewersTips", typ: "" },
      { json: "contributed_by", js: "contributedBy", typ: "" },
    ],
    false
  ),
  BoilVolume: o(
    [
      { json: "value", js: "value", typ: u(3.14, null) },
      { json: "unit", js: "unit", typ: "" },
    ],
    false
  ),
  Ingredients: o(
    [
      { json: "malt", js: "malt", typ: a(r("Malt")) },
      { json: "hops", js: "hops", typ: a(r("Hop")) },
      { json: "yeast", js: "yeast", typ: u("", null) },
    ],
    false
  ),
  Hop: o(
    [
      { json: "name", js: "name", typ: "" },
      { json: "amount", js: "amount", typ: r("BoilVolume") },
      { json: "add", js: "add", typ: "" },
      { json: "attribute", js: "attribute", typ: "" },
    ],
    false
  ),
  Malt: o(
    [
      { json: "name", js: "name", typ: "" },
      { json: "amount", js: "amount", typ: r("BoilVolume") },
    ],
    false
  ),
  Method: o(
    [
      { json: "mash_temp", js: "mashTemp", typ: a(r("MashTemp")) },
      { json: "fermentation", js: "fermentation", typ: r("Fermentation") },
      { json: "twist", js: "twist", typ: u(null, "") },
    ],
    false
  ),
  Fermentation: o([{ json: "temp", js: "temp", typ: r("BoilVolume") }], false),
  MashTemp: o(
    [
      { json: "temp", js: "temp", typ: r("BoilVolume") },
      { json: "duration", js: "duration", typ: u(0, null) },
    ],
    false
  ),
};
