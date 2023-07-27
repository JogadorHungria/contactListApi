import { Router } from "express";

const users = Router();

users.post("/login");

users.post("");

users.get("");
users.get("/profile");
users.get("/:id");

users.patch("");

users.delete("");

export default users;
