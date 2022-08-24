import React from 'react';
import { Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Container from '@mui/material/Container';
import { MoreVert } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const Import = (props) => {
	// fill out this component
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleDelete = () => {
		props.deleteMakes();
		setAnchorEl(null);
	};

	return (
		<Container sx={{ marginTop: '4rem' }}>
			<Button variant="contained" color="primary" onClick={props.fetchMakes}>
				Import
			</Button>
			<h2>COUNT: {props.makes.length}</h2>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Id</TableCell>
						<TableCell>Make</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.makes.map((make, index) => (
						<TableRow key={index}>
							<TableCell>{make.MakeId}</TableCell>
							<TableCell>{make.MakeName}</TableCell>
							<TableCell>
								<IconButton
									key={index}
									id="basic-button"
									aria-controls={open ? 'basic-menu' : undefined}
									aria-haspopup="true"
									aria-expanded={open ? 'true' : undefined}
									onClick={handleClick}
								>
									<MoreVert />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleDelete}>Delete</MenuItem>
			</Menu>
		</Container>
	);
};

export default Import;
