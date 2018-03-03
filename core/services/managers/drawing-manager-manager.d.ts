import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AgmDrawingManager } from './../../directives/drawing-manager';
import { GoogleMapsAPIWrapper } from './../google-maps-api-wrapper';
import { DrawingManager } from './../google-maps-types';
export declare class DrawingManagerManager {
    protected _mapsWrapper: GoogleMapsAPIWrapper;
    protected _zone: NgZone;
    protected _drawingManagers: Map<AgmDrawingManager, Promise<DrawingManager>>;
    constructor(_mapsWrapper: GoogleMapsAPIWrapper, _zone: NgZone);
    addDrawingManager(drawingManager: AgmDrawingManager): void;
    deleteDrawingManager(drawingManager: AgmDrawingManager): Promise<void>;
    updateDrawingMode(drawingManager: AgmDrawingManager): Promise<void>;
    updateDrawingControl(drawingManager: AgmDrawingManager): Promise<void>;
    updateDrawingControlOptions(drawingManager: AgmDrawingManager): Promise<void>;
    updateCircleOptions(drawingManager: AgmDrawingManager): Promise<void>;
    updateMarkerOptions(drawingManager: AgmDrawingManager): Promise<void>;
    updatePolylineOptions(drawingManager: AgmDrawingManager): Promise<void>;
    updatePolygonOptions(drawingManager: AgmDrawingManager): Promise<void>;
    updateRectangleOptions(drawingManager: AgmDrawingManager): Promise<void>;
    createEventObservable<T>(eventName: string, drawingManager: AgmDrawingManager): Observable<T>;
}
