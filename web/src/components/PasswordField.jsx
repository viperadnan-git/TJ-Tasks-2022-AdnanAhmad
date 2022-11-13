import * as React from "react";

import { FormControl, FormLabel, IconButton, Input, InputGroup, InputProps, InputRightElement, useDisclosure, useMergeRefs } from "@chakra-ui/react";

import { EyeIcon } from "../assets/icons/EyeIcon";
import { EyeOffIcon } from "../assets/icons/EyeOffIcon";

export const PasswordField = React.forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef < HTMLInputElement > null;

    const mergeRef = useMergeRefs(inputRef, ref);
    const onClickReveal = () => {
        onToggle();
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    };

    return (
        <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
                <InputRightElement>
                    <IconButton variant="link" aria-label={isOpen ? "Mask password" : "Reveal password"} icon={isOpen ? <EyeOffIcon /> : <EyeIcon />} onClick={onClickReveal} />
                </InputRightElement>
                <Input id="password" ref={mergeRef} name="password" type={isOpen ? "text" : "password"} autoComplete="current-password" required {...props} />
            </InputGroup>
        </FormControl>
    );
});

PasswordField.displayName = "PasswordField";
