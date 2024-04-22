let prop11 = {
    prop11: {
        prop21: 21,
        prop22: {
            prop31: 31,
            prop32: 32
        },
    },
    prop12: 12
}
let proto = {
    prop11: {
        prop22: null
    },
}
// expected = {
//   prop11:{
//     prop22:{
//       prop31:31,
//       prop32:32
//     }
//   }
// }


function objectProjection(src, self = this) {
    const obj = {}
    for (const key in src) {
        if (!self.hasOwnProperty(key) || !src.hasOwnProperty(key)) {
            continue
        }

        if (typeof src[key] === 'object' && typeof self[key] === 'object' && self[key]!==null) {
            obj[key] = objectProjection(src[key], self[key])
        }

        if (typeof src[key] !== 'object' || (typeof src[key] === 'object' && self[key]===null)) {
            obj[key] = src[key]
        }

    }
    return obj
}

Object.prototype.objectProjection = objectProjection

let res = proto.objectProjection(prop11);
console.log(JSON.stringify(res,null,2));
