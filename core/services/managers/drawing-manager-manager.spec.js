import { NgZone } from '@angular/core';
import { TestBed, async, inject } from '@angular/core/testing';
import { AgmDrawingManager } from './../../directives/drawing-manager';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { DrawingManagerManager } from './../managers/drawing-manager-manager';
describe('DrawingManagerManager', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [
                { provide: NgZone, useFactory: function () { return new NgZone({ enableLongStackTrace: true }); } },
                DrawingManagerManager, {
                    provide: GoogleMapsAPIWrapper,
                    useValue: jasmine.createSpyObj('GoogleMapsAPIWrapper', ['createDrawingManager'])
                }
            ]
        });
    });
    describe('Create a new drawing manager', function () {
        it('should call the mapsApiWrapper when creating a new drawing manager', inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            newDrawingManager.drawingMode = 'circle';
            newDrawingManager.drawingControl = false;
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: 'circle',
                drawingControl: false,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
        }));
    });
    describe('Delete a drawing manager', function () {
        it('should set the map to null when deleting a existing drawing manager', inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            drawingManagerManager.deleteDrawingManager(newDrawingManager).then(function () { expect(drawingManagerInstance.setMap).toHaveBeenCalledWith(null); });
        }));
    });
    describe('set drawing manager drawing mode', function () {
        it('should update drawing manager via setDrawingMode method when the drawingMode changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var drawingMode = 'POLYGON';
            newDrawingManager.drawingMode = drawingMode;
            return drawingManagerManager.updateDrawingMode(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ drawingMode: drawingMode }); });
        })));
    });
    describe('set drawing manager drawing control', function () {
        it('should update drawing manager via setDrawingControl method when the drawingControl changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var drawingControl = false;
            newDrawingManager.drawingControl = drawingControl;
            return drawingManagerManager.updateDrawingControl(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ drawingControl: drawingControl }); });
        })));
    });
    describe('set drawing manager drawing control options', function () {
        it('should update drawing manager via setDrawingControlOptions method when the drawingControlOptions changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var drawingControlOptions = { position: 10, drawingMode: ['circle'] };
            newDrawingManager.drawingControlOptions = drawingControlOptions;
            return drawingManagerManager.updateDrawingControlOptions(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ drawingControlOptions: drawingControlOptions }); });
        })));
    });
    describe('set drawing manager circle options', function () {
        it('should update drawing manager via setCircleOptions method when the circleOptions changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var circleOptions = { clickable: false };
            newDrawingManager.circleOptions = circleOptions;
            return drawingManagerManager.updateCircleOptions(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ circleOptions: circleOptions }); });
        })));
    });
    describe('set drawing manager marker options', function () {
        it('should update drawing manager via setCircleOptions method when the markerOptions changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var markerOptions = { clickable: false, position: { lat: 0.1, lng: 0.1 } };
            newDrawingManager.markerOptions = markerOptions;
            return drawingManagerManager.updateMarkerOptions(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ markerOptions: markerOptions }); });
        })));
    });
    describe('set drawing manager polyline options', function () {
        it('should update drawing manager via setPolylineOptions method when the polylineOptions changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var polylineOptions = { clickable: false };
            newDrawingManager.polylineOptions = polylineOptions;
            return drawingManagerManager.updatePolylineOptions(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ polylineOptions: polylineOptions }); });
        })));
    });
    describe('set drawing manager polygon options', function () {
        it('should update drawing manager via setPolygonOptions method when the polygonOptions changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var polygonOptions = { clickable: false };
            newDrawingManager.polygonOptions = polygonOptions;
            return drawingManagerManager.updatePolygonOptions(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ polygonOptions: polygonOptions }); });
        })));
    });
    describe('set drawing manager rectangle options', function () {
        it('should update drawing manager via setRectangleOptions method when the rectangleOptions changes', async(inject([DrawingManagerManager, GoogleMapsAPIWrapper], function (drawingManagerManager, apiWrapper) {
            var newDrawingManager = new AgmDrawingManager(drawingManagerManager);
            var drawingManagerInstance = jasmine.createSpyObj('DrawingManager', ['setMap', 'setOptions']);
            apiWrapper.createDrawingManager.and.returnValue(Promise.resolve(drawingManagerInstance));
            drawingManagerManager.addDrawingManager(newDrawingManager);
            expect(apiWrapper.createDrawingManager).toHaveBeenCalledWith({
                drawingMode: undefined,
                drawingControl: undefined,
                drawingControlOptions: undefined,
                circleOptions: undefined,
                markerOptions: undefined,
                polylineOptions: undefined,
                polygonOptions: undefined,
                rectangleOptions: undefined,
            });
            var rectangleOptions = { clickable: false };
            newDrawingManager.rectangleOptions = rectangleOptions;
            return drawingManagerManager.updateRectangleOptions(newDrawingManager).then(function () { expect(drawingManagerInstance.setOptions).toHaveBeenCalledWith({ rectangleOptions: rectangleOptions }); });
        })));
    });
});
//# sourceMappingURL=drawing-manager-manager.spec.js.map