import React from 'react';
import Table from './Table';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

import { nanoid } from 'nanoid';

function MultiTables(props) {
	const [components, setComponents] = useState([]);

	const [forms, setForms] = useState([]);

	const addMore = () => {
		setComponents([
			...components,
			{
				id: nanoid(),
			},
		]);
	};

	const remove = id => {
		console.log(id);
		console.log("XD");
		setComponents(prev => prev.filter(component => component.id !== id));

		// setComponents(components.filter((_, i) => i !== id.index));
		// setComponents(
		//   components.filter((component) => {
		//     return component.id !== id;
		//   })
		// );
	};

	const render = () => {
		// for (let i = 0; i < count; i++) {
		//   forms.push(
		//     <div key={i}>
		//       <Table value={val[i] || ""} count={count} key={i} />
		//       <button
		//         type="button"
		//         onClick={() => {
		//           console.log(forms);
		//           let table = forms[i].props.children[0].key;
		//           let btn = forms[i].props.children[1].key;
		//           if (table === btn) {
		//             console.log(table, btn);
		//           }
		//         }}
		//         key={i}
		//       >
		//         -
		//       </button>
		//     </div>
		//   );
		// }
		return forms || null;
	};

	return (
		<div>
			<form>
				{/* {render()} */}
				{components.map((component, index) => (
					<div key={component.id}>
						<Table key={component.id} remove={()=>remove(component.id)} />
					</div>
				))}
				<Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 1 }}>
					<Button
						sx={{
							width: '38%',
							lineHeight: 1.6,
							padding: 0.8,
							paddingLeft: 7,
							paddingRight: 7,
						}}
						variant='contained'
						onClick={addMore}>
						New exercise
					</Button>
				</Box>
			</form>
		</div>
	);
}

export default MultiTables;
