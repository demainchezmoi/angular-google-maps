import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
var DrawingManagerManager = (function () {
    function DrawingManagerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._drawingManagers = new Map();
    }
    DrawingManagerManager.prototype.addDrawingManager = function (drawingManager) {
        var drawingManagerPromise = this._mapsWrapper.createDrawingManager({
            drawingMode: drawingManager.drawingMode,
            drawingControl: drawingManager.drawingControl,
            drawingControlOptions: drawingManager.drawingControlOptions,
            circleOptions: drawingManager.circleOptions,
            markerOptions: drawingManager.markerOptions,
            polylineOptions: drawingManager.polylineOptions,
            polygonOptions: drawingManager.polygonOptions,
            rectangleOptions: drawingManager.rectangleOptions,
        });
        this._drawingManagers.set(drawingManager, drawingManagerPromise);
    };
    DrawingManagerManager.prototype.deleteDrawingManager = function (drawingManager) {
        var _this = this;
        var dm = this._drawingManagers.get(drawingManager);
        if (!dm) {
            return Promise.resolve();
        }
        return dm.then(function (dm) {
            return _this._zone.run(function () {
                dm.setMap(null);
                _this._drawingManagers.delete(drawingManager);
            });
        });
    };
    DrawingManagerManager.prototype.updateDrawingMode = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ drawingMode: drawingManager.drawingMode }); });
    };
    DrawingManagerManager.prototype.updateDrawingControl = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ drawingControl: drawingManager.drawingControl }); });
    };
    DrawingManagerManager.prototype.updateDrawingControlOptions = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ drawingControlOptions: drawingManager.drawingControlOptions }); });
    };
    DrawingManagerManager.prototype.updateCircleOptions = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ circleOptions: drawingManager.circleOptions }); });
    };
    DrawingManagerManager.prototype.updateMarkerOptions = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ markerOptions: drawingManager.markerOptions }); });
    };
    DrawingManagerManager.prototype.updatePolylineOptions = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ polylineOptions: drawingManager.polylineOptions }); });
    };
    DrawingManagerManager.prototype.updatePolygonOptions = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ polygonOptions: drawingManager.polygonOptions }); });
    };
    DrawingManagerManager.prototype.updateRectangleOptions = function (drawingManager) {
        return this._drawingManagers.get(drawingManager).then(function (dm) { return dm.setOptions({ rectangleOptions: drawingManager.rectangleOptions }); });
    };
    DrawingManagerManager.prototype.createEventObservable = function (eventName, drawingManager) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._drawingManagers.get(drawingManager).then(function (dm) {
                dm.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    return DrawingManagerManager;
}());
export { DrawingManagerManager };
DrawingManagerManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DrawingManagerManager.ctorParameters = function () { return [
    { type: GoogleMapsAPIWrapper, },
    { type: NgZone, },
]; };
//# sourceMappingURL=drawing-manager-manager.js.map