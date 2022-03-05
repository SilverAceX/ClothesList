export const RoleWrapper = ({ children, rolesAllowed, currentRole }) => {
    if (rolesAllowed.includes(currentRole)) {
        return children;
    } else {
        return null;
    }
}
