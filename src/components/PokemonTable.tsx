import { Table } from "react-bootstrap";
import { useNavigate } from "react-router";
import { PokemonInfo } from "src/hooks/usePokemonList";
import { getRoute } from "src/services";
import { APP_ROUTES } from "src/utils/enums";

interface Props {
  offset: number;
  results: PokemonInfo[];
}

const PokemonTable = ({ offset, results }: Props) => {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    const route = getRoute(APP_ROUTES.POKEMON_DETAIL, id.toString());
    navigate(route);
  };

  const renderTableBody = () =>
    results.map((info, index) => (
      <tr key={info.url} onClick={() => handleRowClick(index + offset + 1)}>
        <td>{index + offset + 1}</td>
        <td className="text-capitalize">{info.name}</td>
        <td className="text-capitalize">{info.ownedTotal || 0}</td>
      </tr>
    ));

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Owned Total</th>
        </tr>
      </thead>
      <tbody>{renderTableBody()}</tbody>
    </Table>
  );
};

export default PokemonTable;
