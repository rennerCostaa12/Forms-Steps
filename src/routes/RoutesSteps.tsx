import { Routes, Route } from "react-router-dom";

import FormStep1 from "../pages/FormsSteps/FormStep1";
import FormStep2 from "../pages/FormsSteps/FormStep2";
import FormStep3 from "../pages/FormsSteps/FormStep3";

export default function RoutesSteps(){
    return(
        <Routes>
            <Route path="/" element={<FormStep1 />} />
            <Route path="/step2" element={<FormStep2 />} />
            <Route path="/step3" element={<FormStep3 />} />
        </Routes>
    )
}