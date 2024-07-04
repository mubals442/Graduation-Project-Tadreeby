import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Headers from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import LogInPage from "./pages/LogInPage.jsx";
import TrainingPage from './pages/TrainingPage.jsx';
import SignInStudentPage from './pages/SignInStudentPage.jsx';
import SignInEntityPage from './pages/SignInEntityPage.jsx';
import SignInUniversityPage from './pages/SignInUniversityPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import TrainingOpenPage from './pages/TrainingOpenPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import WhoSignInPage from './pages/WhoSignInPage.jsx';
import ProfailPage from './pages/ProfailPage.jsx';
import CreateTrainingPage from './pages/CreateTrainingPage.jsx'
import MainTrainingEntityPage from './pages/MainTrainingEntityPage.jsx';
import VerifyEmailPage from './pages/VerifyEmailPage.jsx';
import TablesOfNamesPage from './pages/TablesOfNamesPage.jsx';
import TableOfAcceptedStudentsPage from './pages/TableOfAcceptedStudentsPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';
import MyTrainingPage from './pages/MyTrainingPage.jsx';
import TableToUniPage from './pages/TableToUniPage.jsx';
import EntityCardsPages from './pages/EntityCardsPages.jsx';
import FeedBackPage from './pages/FeedBackPage.jsx';
import OpPage from './pages/OpPage.jsx';
import UniHomePage from './pages/UniHomePage.jsx';




// import ConfirmMessage from './TrainingComp/ConfirmMessage.jsx';




const user = 'entity';


function App() {
  return (
    <>
      <BrowserRouter>
        <Headers user = {user} /> {/*props*/}

        <Routes>
{/***************************************** #Homes# *******************************************************************************************/}
          <Route path="/" element={<HomePage user = {user} />} /> {/*Done : props*/} 
{/*********************************************************************************************************************************************/}

{/***************************************** #Sign In & Log In site# ***************************************************************************/}
          <Route path="/WhoSignInPage"        element={<WhoSignInPage />} />               {/*Done*/}  {/*User to choose*/}
          <Route path="/SignInStudentPage"    element={<SignInStudentPage />} />           {/*Done*/}  {/*Student User Sign In*/}
          <Route path="/SignInEntityPage"     element={<SignInEntityPage />} />            {/*Done*/}  {/*Entity User Sign In*/}
          <Route path="/SignInUniversityPage" element={<SignInUniversityPage />} />        {/*Done*/}  {/*University User Sign In*/}
          <Route path="/LogInPage"            element={<LogInPage />} />                   {/*Done*/}  {/*Log In*/}
{/*********************************************************************************************************************************************/}



{/***************************************** #Profails site# ***********************************************************************************/}
        {user === "student" || user === "entity" || user === "university" ? <Route path="/ProfailPage" element={<ProfailPage user={user} />}/> : null}     {/*Done*/}  {/*yousef*/}
{/*********************************************************************************************************************************************/}


{/***************************************** #Student sections# ********************************************************************************/}
          <Route path="/TrainingPage"     element={<TrainingPage />} />                       {/*Done*/}  
          <Route path='/MyTrainingPage'   element={<MyTrainingPage/>}/>                       
          <Route path="/TrainingOpenPage" element={<TrainingOpenPage />} />                  
          <Route path="/FeedBackPage"     element={<FeedBackPage />} />
{/*********************************************************************************************************************************************/}




{/***************************************** #entity sections# *********************************************************************************/}
          <Route path="/MainTrainingEntityPage"      element={<MainTrainingEntityPage/>}/>
          <Route path="/CreateTrainingPage"          element={<CreateTrainingPage/>}/>
          <Route path="/TablesOfNamesPage"           element={<TablesOfNamesPage/>}/>
          <Route path='/TableOfAcceptedStudentsPage' element={<TableOfAcceptedStudentsPage/>}/>
{/*********************************************************************************************************************************************/}



{/***************************************** #Uni# *********************************************************************************************/}
          <Route path='/UniHomePage'      element={<UniHomePage/>}/>
          <Route path="/TableToUniPage"   element={<TableToUniPage />} />                        {/*Done*/}
          <Route path="/EntityCardsPages" element={<EntityCardsPages/>} />
          <Route path="/OpPage"           element={<OpPage/>}/>
{/*********************************************************************************************************************************************/}



{/***************************************** #Others# ******************************************************************************************/}
          <Route path="/ContactPage" element={<ContactPage />} />                                  {/*Done*/}
          <Route path='*'            element={<ErrorPage />} />                                    {/*Done*/}
{/*********************************************************************************************************************************************/}



{/***************************************** #VerifyEmail# *************************************************************************************/}
          <Route path='/VerifyEmailPage'  element={<VerifyEmailPage/>}/>
          <Route path='/ConfirmationPage' element={<ConfirmationPage/>}/>
{/*********************************************************************************************************************************************/}

        </Routes>
            <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

