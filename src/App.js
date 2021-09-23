import { useEffect, useState } from 'react';
import './App.css';
import Profiles from './Profiles';
import Paging from './Paging';
import load from './users';

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        load(currentPage).then((result) => {
            setTotalPages(result.total_pages);
            setCurrentPage(result.page);
            setUsers(result.data);
        });
    }, [currentPage]);

    const handlePageChange = (newPage) => setCurrentPage(newPage);
    return (
        <div className='App'>
            <Paging
                current={currentPage}
                total={totalPages}
                onPageChange={handlePageChange}
            />
            <main className='profile-cards'>
                <Profiles users={users} />
            </main>
        </div>
    );
}

export default App;
