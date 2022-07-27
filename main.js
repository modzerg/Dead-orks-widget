let Api = "https://russianwarship.rip/api/v1/statistics/latest";
fetch(Api)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.getElementById("date").innerHTML = data.data.date;
        document.getElementById("day").innerHTML = '(' + data.data.day + '-й день війни)';
        document.getElementById("personnel_units").innerHTML = data.data.stats.personnel_units;
        document.getElementById("personnel_units_per_day").innerHTML = '(+' + data.data.increase.personnel_units + ') За добу';
        document.getElementById("tanks").innerHTML = data.data.stats.tanks;
        document.getElementById("tanks_per_day").innerHTML = '(+' + data.data.increase.tanks + ') За добу';
        document.getElementById("armoured_fighting_vehicles").innerHTML = data.data.stats.armoured_fighting_vehicles;
        document.getElementById("armoured_fighting_vehicles_per_day").innerHTML = '(+' + data.data.increase.armoured_fighting_vehicles + ') За добу';
        document.getElementById("artillery_systems").innerHTML = data.data.stats.artillery_systems;
        document.getElementById("artillery_systems_per_day").innerHTML = '(+' + data.data.increase.artillery_systems + ') За добу';
        document.getElementById("mlrs").innerHTML = data.data.stats.mlrs;
        document.getElementById("mlrs_per_day").innerHTML = '(+' + data.data.increase.mlrs + ') За добу';
        document.getElementById("aa_warfare_systems").innerHTML = data.data.stats.aa_warfare_systems;
        document.getElementById("aa_warfare_systems_per_day").innerHTML = '(+' + data.data.increase.aa_warfare_systems + ') За добу';
        document.getElementById("planes").innerHTML = data.data.stats.planes;
        document.getElementById("planes_per_day").innerHTML = '(+' + data.data.increase.planes + ') За добу';
        document.getElementById("helicopters").innerHTML = data.data.stats.helicopters;
        document.getElementById("helicopters_per_day").innerHTML = '(+' + data.data.increase.helicopters + ') За добу';
        document.getElementById("vehicles_fuel_tanks").innerHTML = data.data.stats.vehicles_fuel_tanks;
        document.getElementById("vehicles_fuel_tanks_per_day").innerHTML = '(+' + data.data.increase.vehicles_fuel_tanks + ') За добу';
        document.getElementById("warships_cutters").innerHTML = data.data.stats.warships_cutters;
        document.getElementById("warships_cutters_per_day").innerHTML = '(+' + data.data.increase.warships_cutters + ') За добу';
        document.getElementById("uav_systems").innerHTML = data.data.stats.uav_systems;
        document.getElementById("uav_systems_per_day").innerHTML = '(+' + data.data.increase.uav_systems + ') За добу';
        document.getElementById("special_military_equip").innerHTML = data.data.stats.special_military_equip;
        document.getElementById("special_military_equip_per_day").innerHTML = '(+' + data.data.increase.special_military_equip + ') За добу';
        document.getElementById("atgm_srbm_systems").innerHTML = data.data.stats.atgm_srbm_systems;
        document.getElementById("atgm_srbm_systems_per_day").innerHTML = '(+' + data.data.increase.atgm_srbm_systems + ') За добу';
        document.getElementById("cruise_missiles").innerHTML = data.data.stats.cruise_missiles;
        document.getElementById("cruise_missiles_per_day").innerHTML = '(+' + data.data.increase.cruise_missiles + ') За добу';
    });