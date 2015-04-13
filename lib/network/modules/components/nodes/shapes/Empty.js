/**
 * Created by Alex on 3/18/2015.
 */
'use strict';

import NodeBase from '../util/NodeBase'

class Empty extends NodeBase {
  constructor (options, body, labelModule) {
    super(options, body, labelModule);
  }

  setOptions() {}

  resize() {}

  draw() {}

  distanceToBorder() {}
}

export default Empty;