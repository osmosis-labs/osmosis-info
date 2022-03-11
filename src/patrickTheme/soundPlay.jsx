import { makeStyles } from "@material-ui/core"
import { useEffect, useRef, useState } from "react"
import sound from "../patrickTheme/ressources/themeSong.mp3"
import leprechaunIMG from "../patrickTheme/ressources/leprechaun.svg"
import useAudio from "../hooks/AudioHook"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import PauseIcon from "@material-ui/icons/Pause"
const useStyles = makeStyles((theme) => {
	return {
		soundPlayRoot: {
			cursor: "pointer",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "10px",
			border: `1px solid ${theme.palette.greenPatrick.dark}`,
			color: theme.palette.greenPatrick.light,
			padding: "5px",
			transition: "all 0.5s ease",
			"&:hover": {
				backgroundColor: theme.palette.greenPatrick.light,
				color: theme.palette.greenPatrick.dark,
			},
		},
		icon: {},
		iconDancing: {
			animation: "$dancingIcon 1.5s infinite reverse",
		},
		leprechaun: {
			height: "20px",
			margin: "2px",
		},
		leprechaunRight: {
			transform: "scaleX(-1)",
		},
		leprechaunDancing: {
			animation: "$dancingLeprechaun 1.5s infinite ",
		},
		leprechaunDancingRight: {
			animation: "$dancingLeprechaunRight 1.5s infinite",
		},
		"@keyframes dancingLeprechaun": {
			"0%, 100%": {
				transform: "translateY(0px) translateX(1px) rotate(2deg)",
			},
			"50%": {
				transform: "translateY(2px) translateX(-1px) rotate(-10deg)",
			},
		},
		"@keyframes dancingLeprechaunRight": {
			"0%, 100%": {
				transform: "translateY(0px) translateX(-1px) rotate(-2deg) scaleX(-1)",
			},
			"50%": {
				transform: "translateY(2px) translateX(1px) rotate(10deg) scaleX(-1)",
			},
		},
		"@keyframes dancingIcon": {
			"0%, 100%": {
				transform: "",
			},
			"50%": {
				transform: "rotate(180deg) ",
			},
          
		},
	}
})

const SoundPlay = () => {
	const classes = useStyles()
	const [playing, toggle] = useAudio(sound)

	const onClick = () => {
		toggle()
	}

	return (
		<div className={classes.soundPlayRoot} onClick={onClick}>
			<img
				src={leprechaunIMG}
				alt="leprechaun"
				className={playing ? `${classes.leprechaun} ${classes.leprechaunDancing}` : `${classes.leprechaun}`}
			/>
			{playing ? (
				<PauseIcon className={`${classes.icon} ${classes.iconDancing}`} />
			) : (
				<PlayArrowIcon className={classes.icon} />
			)}
			<img
				src={leprechaunIMG}
				alt="leprechaun"
				className={
					playing
						? `${classes.leprechaun} ${classes.leprechaunRight} ${classes.leprechaunDancingRight}`
						: `${classes.leprechaun} ${classes.leprechaunRight}`
				}
			/>
		</div>
	)
}

export default SoundPlay