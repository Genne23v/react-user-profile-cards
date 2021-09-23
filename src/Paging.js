import './Paging.css';

function Paging({ current, total, onPageChange }) {
    let label = current === total ? 'Previous' : 'Next';

    const onClickHandler = () => {
        let newPage;
        if (current === total) {
            newPage = current - 1;
        } else {
            newPage = current + 1;
        }

        onPageChange(newPage);
    };

    return (
        <div>
            <button className='paging-button' onClick={onClickHandler}>
                {label}
            </button>
        </div>
    );
}

export default Paging;
