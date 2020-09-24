import {IRect} from "../../interfaces/IRect";
import {Action} from "../Actions";
import {LabelType} from "../../data/enums/LabelType";
import {IPoint, IGeoPoint} from "../../interfaces/IPoint";
import {LabelStatus} from "../../data/enums/LabelStatus";
import {ILine} from "../../interfaces/ILine";

export type LabelRect = {
    // GENERAL
    id: string;
    labelId: string;
    rect: IRect;

    // AI
    isCreatedByAI: boolean;
    status: LabelStatus;
    suggestedLabel: string;
}

export type LabelPoint = {
    // GENERAL
    id: string;
    labelId: string;
    point: IPoint;

    // AI
    isCreatedByAI: boolean;
    status: LabelStatus;
    suggestedLabel: string;
}

export type LabelPolygon = {
    id: string;
    labelId: string;
    vertices: IPoint[];
}

export type LabelLine = {
    id: string;
    labelId: string;
    line: ILine
}

export type LabelName = {
    name: string;
    id: string;
}
export type UrlFile = {
    name: string;
    url: string;
    size: number;
}

export type ImageData = {

    id: string;
    fileData: File|UrlFile;
    loadStatus: boolean;
    labelRects: LabelRect[];
    labelPoints: LabelPoint[];
    labelLines: LabelLine[];
    labelPolygons: LabelPolygon[];
    buildingMetadata: BuildingMetadata;
    imageMetadata: string;

    // Response from the backend for uploading this image, if exists.
    uploadResponse: any;
    // Response from the backend for uploading the annotations of this image, if exists.
    annotationsResponse: any;
    // Response from the backend for uploading the associations between this image and
    // the global footprint. This information is used to delete the old association upload
    // before uploading the current new asscoaitions.
    associationsResponse: any;
    // This is used to check if current associations should be uploaded or not.
    lastUploadedAssociations: FacadeFrontLinePair[];

    // SSD
    isVisitedByObjectDetector: boolean;

    // POSE NET
    isVisitedByPoseDetector: boolean;
}

export type FootprintPolygon = {
    vertices: IGeoPoint[];
}

export type FacadeFrontLinePair = {
    facadeId: string;
    polygonIndex: number;
    indices: number[];
}

export type BuildingMetadata = {
    footprint: FootprintPolygon[];
    associations: FacadeFrontLinePair[];
}

export type LabelsState = {
    activeImageIndex: number;
    activeLabelNameId: string;
    activeLabelType: LabelType;
    activeLabelId: string;
    highlightedLabelId: string;
    imagesData: ImageData[];
    firstLabelCreatedFlag: boolean;
    labels: LabelName[];
    buildingMetadata: BuildingMetadata;
}

interface UpdateActiveImageIndex {
    type: typeof Action.UPDATE_ACTIVE_IMAGE_INDEX;
    payload: {
        activeImageIndex: number;
    }
}

interface UpdateActiveLabelNameId {
    type: typeof Action.UPDATE_ACTIVE_LABEL_NAME_ID;
    payload: {
        activeLabelNameId: string;
    }
}

interface UpdateActiveLabelId {
    type: typeof Action.UPDATE_ACTIVE_LABEL_ID;
    payload: {
        activeLabelId: string;
    }
}

interface UpdateHighlightedLabelId {
    type: typeof Action.UPDATE_HIGHLIGHTED_LABEL_ID;
    payload: {
        highlightedLabelId: string;
    }
}

interface UpdateActiveLabelType {
    type: typeof Action.UPDATE_ACTIVE_LABEL_TYPE;
    payload: {
        activeLabelType: LabelType;
    }
}

interface UpdateImageDataById {
    type: typeof Action.UPDATE_IMAGE_DATA_BY_ID;
    payload: {
        id: string;
        newImageData: ImageData;
    }
}

interface AddImageData {
    type: typeof Action.ADD_IMAGES_DATA;
    payload: {
        imageData: ImageData[];
    }
}

interface UpdateImageData {
    type: typeof Action.UPDATE_IMAGES_DATA;
    payload: {
        imageData: ImageData[];
    }
}

interface UpdateLabelNames {
    type: typeof Action.UPDATE_LABEL_NAMES;
    payload: {
        labels: LabelName[];
    }
}

interface UpdateFirstLabelCreatedFlag {
    type: typeof Action.UPDATE_FIRST_LABEL_CREATED_FLAG;
    payload: {
        firstLabelCreatedFlag: boolean;
    }
}

interface UpdateFootprint {
    type: typeof Action.UPDATE_FOOTPRINT;
    payload: {
        footprint: FootprintPolygon[];
    }
}

interface UpdateSelectdPoints {
    type: typeof Action.UPDATE_SELECTED_POINTS;
    payload: {
        polygonIndex: number;
        pointIndex: number;
    }
}

interface UpdateAssociations {
    type: typeof Action.UPDATE_ASSOCIATIONS;
    payload: {
        facadeId: string;
    }
}

interface DeleteAssociation {
    type: typeof Action.DELETE_ASSOCIATION;
    payload: {
        facadeId: string;
    }
}

export type LabelsActionTypes = UpdateActiveImageIndex
    | UpdateActiveLabelNameId
    | UpdateActiveLabelType
    | UpdateImageDataById
    | AddImageData
    | UpdateImageData
    | UpdateLabelNames
    | UpdateActiveLabelId
    | UpdateHighlightedLabelId
    | UpdateFirstLabelCreatedFlag
    | UpdateFootprint
    | UpdateSelectdPoints
    | UpdateAssociations
    | DeleteAssociation
