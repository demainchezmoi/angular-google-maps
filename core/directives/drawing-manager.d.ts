import { EventEmitter, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import * as mapTypes from '../services/google-maps-types';
import { DrawingManagerManager } from '../services/managers/drawing-manager-manager';
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
export declare class AgmDrawingManager implements OnDestroy, OnChanges {
    private _drawingManagerManager;
    /**
     * The drawing mode of the drawing manager.
     */
    drawingMode: string;
    /**
     * Wether drawing controls are shown on the map.
     */
    drawingControl: boolean;
    /**
     * Configuration for the drawing controls of the drawing manager.
     */
    drawingControlOptions: mapTypes.DrawingControlOptions;
    /**
     * Circle options for the drawing manager.
     */
    circleOptions: mapTypes.CircleOptions;
    /**
     * Marker options for the drawing manager.
     */
    markerOptions: mapTypes.MarkerOptions;
    /**
     * Polyline options for the drawing manager.
     */
    polylineOptions: mapTypes.PolylineOptions;
    /**
     * Polygon options for the drawing manager.
     */
    polygonOptions: mapTypes.PolygonOptions;
    /**
     * Rectangle options for the drawing manager.
     */
    rectangleOptions: mapTypes.RectangleOptions;
    /**
     * This event emitter gets emitted when the user finishes drawing any overlay.
     */
    overlayComplete: EventEmitter<mapTypes.Overlay>;
    /**
     * This event emitter gets emitted when the user finishes drawing a circle.
     */
    circleComplete: EventEmitter<mapTypes.Circle>;
    /**
     * This event emitter gets emitted when the user finishes drawing a marker.
     */
    markerComplete: EventEmitter<mapTypes.Marker>;
    /**
     * This event emitter gets emitted when the user finishes drawing a polyline.
     */
    polylineComplete: EventEmitter<mapTypes.Polyline>;
    /**
     * This event emitter gets emitted when the user finishes drawing a polygon.
     */
    polygonComplete: EventEmitter<mapTypes.Polygon>;
    /**
     * This event emitter gets emitted when the user finishes drawing a rectangle.
     */
    rectangleComplete: EventEmitter<mapTypes.Rectangle>;
    private _drawingManagerAddedToManager;
    private _observableSubscriptions;
    constructor(_drawingManagerManager: DrawingManagerManager);
    /** @internal */
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    private _addEventListeners();
    /** @internal */
    ngOnDestroy(): void;
}
