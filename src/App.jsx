import Table from './components/table';
import Loading from './components/loading';
import useFetch from './hooks/useFetch';
import CreateUser from './components/createUser';

function App() {
  const { data: usersData, isLoading } = useFetch({ url: 'https://react-test3.free.beeceptor.com/users' });
  const columnsData = [
    'Id',
    'First Name',
    'Last Name',
    'Email',
    'Gender',
    'Ip Address',
    'Age',
    'Country',
    'Postal code',
    'Favorite color',
    'Social media handle',
    'Sport',
    'Followers',
  ];

  return (
    <>
      {isLoading && <Loading />}
      {usersData && (
        <>
          <CreateUser />
          <Table data={usersData} columns={columnsData} />
        </>
      )}
    </>
  );
}

export default App;
