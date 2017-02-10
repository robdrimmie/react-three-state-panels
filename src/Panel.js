import React from 'react';

const { any, bool, object, string } = React.PropTypes;

/*
Degrees of disclosure:
- preview
    - just the header
    - visible when isPreview is true
- full
    - visible when !isPreview && !isSummary
    - all components
- summary
    - visible when !isPreview && isSummary
    - subset of info, usually read-only
*/

export default class Panel extends React.Component {
    static propTypes = {
        viewMore: string,
        viewLess: string,

        preview: object,
        summary: object,

        isPreview: bool,
        isSummary: bool,

        children: any.isRequired,
        className: string,
    }

    static defaultProps = {
        viewMore: 'view more',
        viewLess: 'view less',

        isPreview: true,
        isSummary: false,

        preview: null,
        summary: null,

        className: '',
    }

    constructor(props) {
        super(props);

        this.state = {
            isSummary: this.props.isSummary,
        };

        this.getClasses = this.getClasses.bind(this);
        this.getContents = this.getContents.bind(this);
        this.toggle = this.toggle.bind(this);
        this.viewToggle = this.viewToggle.bind(this);
    }

    getClasses() {
        if (this.props.isPreview) {
            return ' preview';
        }

        if (this.state.isSummary) {
            return ' summary';
        }

        return '';
    }

    getContents() {
        if (this.props.isPreview) {
            return this.props.preview;
        }

        if (this.state.isSummary) {
            return this.state.summary;
        }

        return this.props.children;
    }

    toggle() {
        this.setState({
            isSummary: !this.state.isSummary,
        });
    }

    viewToggle() {
        if (this.props.isPreview) return;

        return (
            <a 
                className="toggle"
                onClick={this.toggle}
            >
                {this.state.isSummary ? this.props.viewMore : this.props.viewLess}
            </a>
        );
    }

    render() {
        console.log(this.state.isSummary);
        const classes = `${this.props.className}${this.getClasses()}`;

        return (
            <div className={`panel panel-default checkout-panel ${classes}`}>
                <div className="panel-heading">
                    <h2 className="panel-title">
                        {this.props.title}
                    </h2>
                    {this.viewToggle()}
                </div>
                <div className="panel-body">
                    {this.getContents()}
                </div>
            </div>
        );
    }
}