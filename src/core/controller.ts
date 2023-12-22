import {useState} from "react";
import {Results} from "./types";

export const useController = () => {
  const [data, updateData] = useState<Results>([{id: "test", text: "test"}]);

  const execQuery = async (value: string) => {
    updateData([{id: "1", text: value}]);
  };

  return {
    data,
    execQuery,
  };
}
