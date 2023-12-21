import React, { ReactElement, FC } from 'react';

interface MultiContextProviderProps {
  contexts: FC<{ children: ReactElement }>[];
  children: ReactElement;
}

const MultiContextProvider: React.FC<MultiContextProviderProps> = ({
  contexts,
  children,
}) => {
  const wrapContexts = (
    children: ReactElement,
    contextProviders: FC<{ children: ReactElement }>[]
  ) => {
    return contextProviders.reduceRight((acc, ContextProvider) => {
      return <ContextProvider>{acc}</ContextProvider>;
    }, children);
  };

  return wrapContexts(children, contexts);
};

export default MultiContextProvider;
