import './style.css';
import React, { Fragment, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	parseGeographies,
	Geography,
	Graticule,
	Sphere
} from "react-simple-maps";
import ReactTooltip from "react-tooltip";

function Map(props) {
	useEffect(() => {
		ReactTooltip.rebuild();
	});

	var geos = 
			<Geographies geography={props.topoJson}>
			{({ geographies }) => {
				return geographies.map(geo =>
					<Geography
						key={geo.rsmKey}
						geography={geo}
						data-tip={geo.properties.NL_NAME_1}
						onMouseEnter={() => {
							props.setTooltipContent(geo.properties.NL_NAME_1);
						}}
						onMouseLeave={() => {
							props.setTooltipContent("");
						}}
						style={{
							default: {
								fill: "#ECEFF1",
								stroke: "#607D8B",
								strokeWidth: 0.75,
								outline: "none"
							},
							pressed: {
								fill: "#607D8B",
								stroke: "#607D8B",
								strokeWidth: 0.75,
								outline: "none"
							},
							hover: {
								fill: "#FF5722",
								stroke: "#607D8B",
								strokeWidth: 0.75,
								outline: "none"
							}
						}} />)
			}
			}
		</Geographies>

	return (
		<Fragment>
			<ComposableMap
				projection="geoOrthographic"//"geoAlbers"//"geoMercator"
				projectionConfig={{ scale: 600, rotate: [-90, -67, -10] }}
				style={{
					width: "800px",
					height: "600px"
				}}
			>
				{/* <ZoomableGroup center={[92, 64]}> */}
				<Graticule stroke="lightgrey" />
				{/* <Sphere stroke="blue" strokeWidth={2} /> */}
				{geos}
				{/* </ZoomableGroup> */}
			</ComposableMap>
			
		</Fragment>
	);
}

Map.propTypes = {
	data: PropTypes.object
};

export default Map;
