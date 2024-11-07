import Navbar from "./Navbar"




const Cards = () => {
    return (
        <>
        <Navbar/>
            <div className="card-group" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#f0f0f0' }}>
                <div className="card" style={{ flex: '1', margin: '0 10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#ffffff' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card image" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                    <div className="card-body" style={{ padding: '15px' }}>
                        <h5 className="card-title" style={{ color: '#333', marginBottom: '10px' }}>Card title 1</h5>
                        <p className="card-text" style={{ color: '#666', fontSize: '14px' }}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small style={{ color: '#999' }}>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card" style={{ flex: '1', margin: '0 10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#ffffff' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card image" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                    <div className="card-body" style={{ padding: '15px' }}>
                        <h5 className="card-title" style={{ color: '#333', marginBottom: '10px' }}>Card title 2</h5>
                        <p className="card-text" style={{ color: '#666', fontSize: '14px' }}>This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small style={{ color: '#999' }}>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card" style={{ flex: '1', margin: '0 10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#ffffff' }}>
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Card image" style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                    <div className="card-body" style={{ padding: '15px' }}>
                        <h5 className="card-title" style={{ color: '#333', marginBottom: '10px' }}>Card title 3</h5>
                        <p className="card-text" style={{ color: '#666', fontSize: '14px' }}>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small style={{ color: '#999' }}>Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
