import ReferenceInfo from "../model/referenceInfo/referenceInfo"
import TrackDiary from "../model/trackDiary/trackDiary"
import TrackResults from "../model/trackResults/trackResults"
import DbConnect from "./dataset"

class Controller{
    constructor(referenceInfo, trackDiary, trackResults, dbConnect){
        this.referenceInfo = referenceInfo;
        this.trackDiary = trackDiary;
        this.trackResults = trackResults;
        this.dbConnect = dbConnect;
    }

    setReferenceInfo(referenceInfo) {
        this.referenceInfo = referenceInfo;
    }

    setPathInfo(){

    }

    setPlanInfo(){

    }

    getReferenceInf(){
        return this.ReferenceInfo;
    }

    setTrackDiary(){

    }

}