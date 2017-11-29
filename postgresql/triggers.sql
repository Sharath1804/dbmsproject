CREATE TRIGGER remove_injuries_trigger AFTER
INSERT ON injuries
FOR EACH ROW execute PROCEDURE remove_injuries_workouts();

CREATE TRIGGER remove_injuries_trigger AFTER
INSERT ON workoutplans
FOR EACH ROW execute PROCEDURE remove_injuries_workouts();

CREATE TRIGGER remove_allergies_trigger AFTER
INSERT ON allergies
FOR EACH ROW execute PROCEDURE remove_allergies_foods();

CREATE TRIGGER remove_allergies_trigger AFTER
INSERT ON dietplans
FOR EACH ROW execute PROCEDURE remove_allergies_foods();


