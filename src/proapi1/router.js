import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Laypro from './layout';
import Login from './login';
import Register from './register';
import Categories from './catogories';
import Electronis from './electronics';
import Jewelery from './jwellery';
import Womencloth from './womens';
import Menscloth from './mens';
import Productdet from './productdet';
import Protable from './protable';
class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Laypro />}>
                        <Route index element={<Categories />} />
                        <Route path="/:category" element={<Electronis />} />
                        <Route path="/:category" element={<Jewelery />} />
                        <Route path="/:category" element={<Menscloth/>} />
                        <Route path="/:category" element={<Womencloth  />} />
                        <Route path="/product/:id" element={<Productdet />} />
                        <Route path="/protable" element={<Protable />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Router;