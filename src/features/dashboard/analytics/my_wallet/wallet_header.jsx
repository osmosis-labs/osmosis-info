import { makeStyles } from "@material-ui/core"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

const useStyles = makeStyles((theme) => {
	return {
		rootWalletHeader: {
			width: "100%",
			display: "grid",
			gridTemplateColumns: "1fr 1fr 1fr 1fr 17px",
			paddingBottom: "8px",
			borderBottom: `1px solid ${theme.palette.table.hover}`,
			transition: "all 0.3s ease !important",

			[theme.breakpoints.down("xs")]: {},
		},
		name: {
			color: theme.palette.table.cellDark,
			display: "flex",
			alignItems: "center",
			fontSize: "12px",
		},
		sortable: {
			cursor: "pointer",
			display: "flex",
			alignItems: "center",
		},
		sorted: {
			color: theme.palette.primary.contrastText,
		},
		icon: {
			opacity: 0,
			marginRight: "4px",
			marginLeft: "4px",
			fontSize: "1rem !important",
			transition: "all 0.3s ease !important",
		},
		iconShow: {
			opacity: 1,
		},
		iconUp: {
			transform: "rotate(180deg)",
		},
	}
})

const WalletHeader = ({ order, orderBy, onSort }) => {
	const classes = useStyles()

	const getClassName = (name) => {
		let className = `${classes.name} ${classes.sortable}`
		if (orderBy === name) className += ` ${classes.sorted}`
		return className
	}
	const getClassIcon = (name) => {
		let className = `${classes.icon}`
		if (orderBy === name) {
			className += ` ${classes.iconShow}`
			if (order === "asc") className += ` ${classes.iconUp}`
		}
		return className
	}

	return (
		<div className={classes.rootWalletHeader}>
			<span className={classes.name}>Name</span>
			<span
				onClick={() => {
					onSort("amount")
				}}
				className={getClassName("amount")}
			>
				Balance
				<ArrowDownwardIcon className={getClassIcon("amount")} /> 
			</span>
			<span
				onClick={() => {
					onSort("valueChange")
				}}
				className={getClassName("valueChange")}
			>
				 Change (24h)
				<ArrowDownwardIcon className={getClassIcon("valueChange")} />
			</span>
			<span
				onClick={() => {
					onSort("value")
				}}
				className={getClassName("value")}
			>
				 Value (USD)
				<ArrowDownwardIcon className={getClassIcon("value")} />
			</span>
		</div>
	)
}

export default WalletHeader
