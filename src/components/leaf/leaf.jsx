/**
 * Leaf stateless component
 * @param {Leaf} props
 * @returns {ReactElement}
 */
export default function(props) {
    return (
        <div className="leaf">{'Leaf ' + props.id}</div>
    )
}
