import * as React from "react";
import {Button} from "antd";

type Props = {
    label: string;
}

const MyButton: React.FC<Props> = (props) => {

    return (
        <Button>{props.label}</Button>
    )
}

export default MyButton;