/**
 * Copyright (c) Baidu Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license.
 * See LICENSE file in the project root for license information.
 *
 * @file 将元素从页面上移除
 */

var NodeType = require('./node-type');
var handleError = require('../util/handle-error');
var elementGetTransition = require('./element-get-transition');

/**
 * 将元素从页面上移除
 */
function elementOwnDetach() {
    var lifeCycle = this.lifeCycle;
    if (lifeCycle.leaving) {
        return;
    }

    if (!this.disposeNoTransition) {
        var transition = elementGetTransition(this);

        if (transition && transition.leave) {
            if (this._toPhase) {
                this._toPhase('leaving');
            }
            else {
                this.lifeCycle = LifeCycle.leaving;
            }

            var me = this;
            try {
                transition.leave(this.el, function () {
                    me._leave();
                });
                return;
            }
            catch (e) {
                handleError(
                    e, 
                    this.nodeType === NodeType.CMPT ? this.parentComponent : this.owner, 
                    'transitionLeave'
                );
            }
        }
    }

    this._leave();
}


exports = module.exports = elementOwnDetach;
