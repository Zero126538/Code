import React from 'react';
import { Button, Result } from 'antd';

const Rate = () => (
    <Result
        className="relative top-36 h-screen"
        status="404"
        title="404"
        subTitle="Санал асуулга хуудас түр хугацаанд засвартай байна."
        extra={
            <a href="http://localhost:5173/"><Button type="primary" className="bg-blue-600 text-white">Нүүр хуудас руу буцах</Button></a>}
    />
);

export default Rate;