import UniProfileCard from "../Components/UniProfileCard";
import UniProFileData from "../Components/UniProFileData";

function UniProfilePage(){
    return(
        <>
        <h1 style={{color:'gold'}}>تحرير الملف الشخصي</h1>
        <hr></hr>
        <div style={{display:'flex', marginTop:'30px'}}>
        <UniProfileCard/>
        <UniProFileData/>
        </div>
        </>
    );
}

export default UniProfilePage;