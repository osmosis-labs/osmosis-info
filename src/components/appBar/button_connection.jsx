import { Button, makeStyles } from "@material-ui/core"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import { useKeplr } from "../../contexts/KeplrProvider"
const useStyles = makeStyles((theme) => {
	return {
		rootButtonConnection: {
			marginLeft: "16px",
			backgroundColor: "#322DC2",
			color: theme.palette.primary.contrastText,
			"&:hover": {
				backgroundColor: "#4642C8",
			},
		},
	}
})

const ButtonConnection = () => {
	const classes = useStyles()
	const { keplrStatus } = useKeplr()

	const onClick = () => {}

	return (
		<Button
			variant="contained"
			onClick={onClick}
			className={classes.rootButtonConnection}
			startIcon={<AccountBalanceWalletIcon />}
		>
			Connect wallet
		</Button>
	)
}

export default ButtonConnection
