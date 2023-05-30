import { Routes, Route } from 'react-router-dom';
import path from './utils/path';
import { ClassManage, Login, Public, Home } from './public';

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path={path.LOGIN} element={<Login />} />
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.CLASS_MANAGE} element={<ClassManage />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
