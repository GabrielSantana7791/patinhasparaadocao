import {
  CollectionReference,
  DocumentData,
  QueryConstraint,
  where,
  limit,
  startAfter,
  query,
  documentId,
} from "firebase/firestore";

export const getFilteredQueryAndConstraints = <T>({
  filters,
  pageSize,
  lastVisibleDoc,
  collectionReference,
  constraints = [],
}: {
  filters: (Partial<T> & object) | undefined;
  pageSize: number;
  lastVisibleDoc?: object;
  collectionReference: CollectionReference<DocumentData, DocumentData>;
  constraints?: QueryConstraint[];
}): { query: any; constraints: QueryConstraint[] } => {
  const filteredConstraints: QueryConstraint[] = [...constraints];

  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "" && key !== "id") {
        filteredConstraints.push(where(key, "==", value));
      }
      if (key === "id") {
        filteredConstraints.push(where(documentId(), "==", value));
      }
    });
  }

  filteredConstraints.push(limit(pageSize));

  if (lastVisibleDoc) {
    filteredConstraints.push(startAfter(lastVisibleDoc));
  }

  const queryResult = query(collectionReference, ...filteredConstraints);

  return { query: queryResult, constraints: filteredConstraints };
};
