import UsersList from "./pages/UsersList";
import MainTitle from "./components/MainTitle";
import Loading from "./components/Loading";
import { ApiGlobalContext } from "./context";

function App() {
	const { loading } = ApiGlobalContext();
	if (!loading) {
		return <Loading />;
	}
	return (
		<>
			<MainTitle title="Pagination" />
			<UsersList />
		</>
	);
}

export default App;
