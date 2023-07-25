import {HilbertAlgorithm} from "hilbert-curve-ts";
import {matrix, Matrix, zeros} from "mathjs";
import {HilbertOrder} from "hilbert-curve-ts/dist/lib/es6/hilbertAlgorithm";

export function to1dHilbertMatrix(m: Matrix) {
  const size = Math.max(m.size()[0], m.size()[1])
  const order = Math.ceil(Math.log2(size)) as HilbertOrder

  const ha = new HilbertAlgorithm(order);
  const result = matrix(zeros(order * order))
  for (let x = 0; x < order; x++) {
    for (let y = 0; y < order; y++) {
      const index = ha.pointToIndex({x, y})
      const value = m.get([x, y])
      result.set([index], value)
    }
  }

  return result
}

export function to1dHilbertMatrixHex(m: Matrix) {
  const binary = to1dHilbertMatrix(m)
    .toArray()
    .join('');
  return parseInt(binary, 2).toString(16);
}

