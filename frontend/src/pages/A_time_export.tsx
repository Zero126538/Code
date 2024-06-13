import React from 'react';
import { Button, Result } from 'antd';

const A_time_export = () => (
    <Result
        className="relative top-36 h-screen"
        status="404"
        title="404"
        subTitle="А цаг хэвлэх хуудас түр хугацаанд засвартай байна."
        extra={
            <a href="http://localhost:5173/"><Button type="primary" className="bg-blue-600 text-white">Нүүр хуудас руу буцах</Button></a>}
    />
);

export default A_time_export;