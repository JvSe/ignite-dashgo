import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>

      {!!label &&
        <FormLabel htmlFor={rest.name}>{label}</FormLabel>
      }

      <ChakraInput
        id={rest.name}
        focusBorderColor={!!error ? 'none' : "pink.500"}
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage> {error.message} </FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);