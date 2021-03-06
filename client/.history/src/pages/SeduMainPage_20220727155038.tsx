import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AttendanceFeedback from '../components/sedu/AttendanceFeedback';
import MaterialSearch from '../components/sedu/MaterialSearch';
import ParticipantMaster from '../components/sedu/ParticipantMaster';
import ProjectProposal from '../components/sedu/ProjectProposal';
import QuickResponseCode from '../components/sedu/QuickResponseCode';
import SeduBooking from '../components/sedu/SeduBooking';
import SeduReportGenerator from '../components/sedu/SeduReportGenerator';
import SeduSecondaryNavbar from '../components/sedu/shared/SeduSecondaryNavbar';
import UpdateEventMaterial from '../components/sedu/UpdateEventMaterial';
import VenueMaster from '../components/sedu/VenueMaster';
import SecondaryNavbar from '../components/shared/SecondaryNavbar';


// sedu main page where all other section of sedu department can be access from here
function SeduMainPage() {

	return <div>
		<SeduSecondaryNavbar />
		<div className="sub-body-content">
			<Routes>
				<Route path="/venue-master" element={<VenueMaster />} />
				<Route path="/participant-master" element={<ParticipantMaster />} />
				<Route path="/booking" element={<SeduBooking />} />
				<Route path="/attendance-feedback" element={<AttendanceFeedback />} />
				<Route path="/update-material" element={<UpdateEventMaterial />} />
				<Route path="/quick-response" element={<QuickResponseCode />} />
				<Route path="/project-proposal" element={<ProjectProposal />} />
				<Route path="/material-search" element={<MaterialSearch />} />
				<Route path="/report-generator" element={<SeduReportGenerator />} />

			</Routes>
		</div>
	</div>;
}

export default SeduMainPage;
