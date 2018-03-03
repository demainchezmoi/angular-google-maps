import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { DrawingManagerManager } from '../services/managers/drawing-manager-manager';
var drawingManagerId = 0;
/**
 * AgmDrawingManager renders a map drawing manager inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-drawing-manager
 *        [drawingControl]="true"
 *        [drawingControlOptions]="{
 *          position: 10,
 *          drawingModes: ['circle', 'polyline']
 *        }"
 *        [drawingMode]="drawingMode">
 *      </agm-drawing-manager>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmDrawingManager = (function () {
    function AgmDrawingManager(_drawingManagerManager) {
        this._drawingManagerManager = _drawingManagerManager;
        /**
         * This event emitter gets emitted when the user finishes drawing any overlay.
         */
        this.overlayComplete = new EventEmitter();
        /**
         * This event emitter gets emitted when the user finishes drawing a circle.
         */
        this.circleComplete = new EventEmitter();
        /**
         * This event emitter gets emitted when the user finishes drawing a marker.
         */
        this.markerComplete = new EventEmitter();
        /**
         * This event emitter gets emitted when the user finishes drawing a polyline.
         */
        this.polylineComplete = new EventEmitter();
        /**
         * This event emitter gets emitted when the user finishes drawing a polygon.
         */
        this.polygonComplete = new EventEmitter();
        /**
         * This event emitter gets emitted when the user finishes drawing a rectangle.
         */
        this.rectangleComplete = new EventEmitter();
        this._drawingManagerAddedToManager = false;
        this._observableSubscriptions = [];
        this._id = (drawingManagerId++).toString();
    }
    /** @internal */
    AgmDrawingManager.prototype.ngOnChanges = function (changes) {
        if (!this._drawingManagerAddedToManager) {
            this._drawingManagerManager.addDrawingManager(this);
            this._drawingManagerAddedToManager = true;
            this._addEventListeners();
            return;
        }
        if (changes['drawingMode']) {
            this._drawingManagerManager.updateDrawingMode(this);
        }
        if (changes['drawingControl']) {
            this._drawingManagerManager.updateDrawingControl(this);
        }
        if (changes['drawingControlOptions']) {
            this._drawingManagerManager.updateDrawingControlOptions(this);
        }
        if (changes['circleOptions']) {
            this._drawingManagerManager.updateCircleOptions(this);
        }
        if (changes['markerOptions']) {
            this._drawingManagerManager.updateMarkerOptions(this);
        }
        if (changes['polylineOptions']) {
            this._drawingManagerManager.updatePolylineOptions(this);
        }
        if (changes['polygonOptions']) {
            this._drawingManagerManager.updatePolygonOptions(this);
        }
        if (changes['rectangleOptions']) {
            this._drawingManagerManager.updateRectangleOptions(this);
        }
    };
    AgmDrawingManager.prototype._addEventListeners = function () {
        var _this = this;
        var overlayComplete = this._drawingManagerManager.createEventObservable('overlaycomplete', this)
            .subscribe(function (e) {
            _this.overlayComplete.emit(e);
        });
        this._observableSubscriptions.push(overlayComplete);
        var circleComplete = this._drawingManagerManager.createEventObservable('circlecomplete', this)
            .subscribe(function (e) {
            _this.circleComplete.emit(e);
        });
        this._observableSubscriptions.push(circleComplete);
        var markerComplete = this._drawingManagerManager.createEventObservable('markercomplete', this)
            .subscribe(function (e) {
            _this.markerComplete.emit(e);
        });
        this._observableSubscriptions.push(markerComplete);
        var polylineComplete = this._drawingManagerManager.createEventObservable('polylinecomplete', this)
            .subscribe(function (e) {
            _this.polylineComplete.emit(e);
        });
        this._observableSubscriptions.push(polylineComplete);
        var polygonComplete = this._drawingManagerManager.createEventObservable('polygoncomplete', this)
            .subscribe(function (e) {
            _this.polygonComplete.emit(e);
        });
        this._observableSubscriptions.push(polygonComplete);
        var rectangleComplete = this._drawingManagerManager.createEventObservable('rectanglecomplete', this)
            .subscribe(function (e) {
            _this.rectangleComplete.emit(e);
        });
        this._observableSubscriptions.push(rectangleComplete);
    };
    /** @internal */
    AgmDrawingManager.prototype.id = function () { return this._id; };
    /** @internal */
    AgmDrawingManager.prototype.toString = function () { return 'AgmDrawingManager-' + this._id.toString(); };
    /** @internal */
    AgmDrawingManager.prototype.ngOnDestroy = function () {
        this._drawingManagerManager.deleteDrawingManager(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    return AgmDrawingManager;
}());
export { AgmDrawingManager };
AgmDrawingManager.decorators = [
    { type: Directive, args: [{
                selector: 'agm-drawing-manager',
                inputs: ['drawingMode', 'drawingControl', 'drawingControlOptions', 'circleOptions',
                    'markerOptions', 'polylineOptions', 'polygonOptions', 'rectangleOptions'],
                outputs: ['overlayComplete', 'circleComplete', 'markerComplete', 'polylineComplete', 'polygonComplete', 'rectangleComplete']
            },] },
];
/** @nocollapse */
AgmDrawingManager.ctorParameters = function () { return [
    { type: DrawingManagerManager, },
]; };
AgmDrawingManager.propDecorators = {
    'drawingMode': [{ type: Input },],
    'drawingControl': [{ type: Input },],
    'drawingControlOptions': [{ type: Input },],
    'circleOptions': [{ type: Input },],
    'markerOptions': [{ type: Input },],
    'polylineOptions': [{ type: Input },],
    'polygonOptions': [{ type: Input },],
    'rectangleOptions': [{ type: Input },],
    'overlayComplete': [{ type: Output },],
    'circleComplete': [{ type: Output },],
    'markerComplete': [{ type: Output },],
    'polylineComplete': [{ type: Output },],
    'polygonComplete': [{ type: Output },],
    'rectangleComplete': [{ type: Output },],
};
//# sourceMappingURL=drawing-manager.js.map