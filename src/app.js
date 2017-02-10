import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import Panel from './Panel';

const previewSample = (
    <Panel title="Hello, world."
        preview={
            <span>Preview of the list</span>
        }
        className="panel-sample"
    >
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    </Panel>
);

const summarySample = (
    <Panel title="Hello, world."
        summary={
            <div>List of one, two, three</div>
        }
        isPreview={false}
        isSummary={true}
    >
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    </Panel>
);

const fullSample = (
    <Panel title="Hello, world."
        preview={<span>Preview of the list</span>}
        summary={<div>List of one, two, three</div>}
        isPreview={false}
        isSummary={false}
    >
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    </Panel>
);


class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPreview: true,
        };

        this.sample = this.sample.bind(this);
        this.togglePreview = this.togglePreview.bind(this);
    }

    sample() {
        return (
            <Panel title="Hello, world."
                preview={<span>Preview of the list</span>}
                summary={<div>List of one, two, three</div>}
                isPreview={this.state.isPreview}
            >
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </Panel>
        );
    }

    togglePreview() {
        this.setState({
            isPreview: !this.state.isPreview,
        });
    }

    render() {
        return (
            <div>
                {this.sample()}
                <input name="preview" type="checkbox" onChange={this.togglePreview} checked={this.state.isPreview} /> Preview
            </div>
        );
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById('root')
)