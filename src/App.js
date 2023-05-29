import { Routes, Route } from 'react-router-dom';
import path from './utils/path';
import { Login, Public } from './public';
import { Home } from './components';

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        {/* <Route path={path.HOME} element={< />}/> */}
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
