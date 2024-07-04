import { Link } from "react-router-dom"
import UserOpinions from "../OppinionsComp/UserOpinions"

function HomeUserOpinions() {
    return (
        <div className="contenier">
            <div className="UOHome">
            <h2>آراء المستخدمين</h2>
                <button className="HomeUOBS" id="ShowAllUOButton"><Link to={'/'}>إظهار الكل</Link></button>
                </div>
                  <div className="HomeUOS" id="buttomContUOS">
                    <UserOpinions iconProfil="src/assets/Image-icon.png" name="مصطفى رحيم" opinions= "للأسف لم يكن التدريب جيد حيث المدربين لم يقوموا بواجبهم ولم يتعاونوا" />
                    <UserOpinions iconProfil="src/assets/Image-icon2.png" name="محمد علي" opinions= "التدريب كان ممتاز حيث يغطي جميع الجوانب التي تم تدريسها في الجامعة وكان المدربين متعاونين بشكل كبير."/>
                  </div>
        </div>
    )
}

export default HomeUserOpinions

