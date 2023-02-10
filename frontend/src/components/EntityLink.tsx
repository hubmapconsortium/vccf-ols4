import { Link } from "react-router-dom";
import ReferencedEntities from "../model/ReferencedEntities";

export default function EntityLink({
  ontologyId,
  entityType,
  iri,
  referencedEntities,
}: {
  ontologyId: string;
  entityType: "classes" | "properties" | "individuals";
  iri: string;
  referencedEntities: ReferencedEntities;
}) {
  const encodedIri = encodeURIComponent(iri);
  const label = referencedEntities.getLabelForIri(iri) || iri.split("/").pop();

  return (
    <Link className="link-default" to={`/ontologies/${ontologyId}/${entityType}/${encodedIri}`}>
      {label}
    </Link>
  );
}
