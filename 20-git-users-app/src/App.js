import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Dashboard, Error } from "./pages";
import { GlobalContextAPIHook } from "./context/GlobalContext";
import { Loader } from "./components";
import { PrivateRoute } from "./components";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
	const { loading } = GlobalContextAPIHook();
	const { isLoading } = useAuth0();
	// loading referent to github user data fetching
	if (loading?.global) {
		return (
			<section className="section-main flex column center loading-section ">
				<Loader />
			</section>
		);
	}
	/*Auth0 loading - referent to user authentication: 
this condition render set is necessary to go to proteted route,
to known more consult about how to fix flash error on docs at https://auth0.com/blog/complete-guide-to-react-user-authentication/#Add-User-Authentication */
	if (isLoading) {
		return (
			<section className="section-main flex column center loading-section ">
				<Loader />
			</section>
		);
	} else {
		return (
			<BrowserRouter>
				<Routes>
					<Route
						exact={true}
						path="/"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
					<Route path="/login" element={<Login />} />

					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		);
	}
};

export default App;
