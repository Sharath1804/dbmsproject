create function remove_injuries_workouts ()  
returns void as $$
begin
DELETE
FROM workoutplans
WHERE exercise_id in (
	SELECT w.exercise_id
     FROM workoutplans w,
          injuries i,
          exercises e
     WHERE i.muscle_id IN
         (SELECT e.muscle_group_id_id
          FROM exercises e
          WHERE e.id = w.exercise_id
            AND w.member_id=i.member_id)
            )
            AND
      member_id IN
    (
       (SELECT w.member_id
        FROM workoutplans w,
          injuries i,
          exercises e
          WHERE e.id = w.exercise_id
            AND w.member_id=i.member_id)
     );
end
;
$$ LANGUAGE plpgsql;


create function remove_allergies_foods ()  
returns void as $$
begin
DELETE 
FROM dietplans
WHERE food_id in (
	SELECT d.food_id
     FROM dietplans d,
          allergies a,
          foods f
     WHERE a.food_id IN
         (SELECT f.id
          FROM foods f
          WHERE f.id = d.food_id
            AND d.member_id=a.member_id)
            )
            AND
      member_id IN
    (
       (SELECT d.member_id
        FROM dietplans d,
          allergies a,
          foods f
          WHERE f.id = d.food_id
            AND d.member_id=a.member_id)
     );
end
;
$$ LANGUAGE plpgsql;
