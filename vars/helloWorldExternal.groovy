def call(Map config = [:]) {
    loadLinuxScript(name: 'hellow-world.sh')
    sh "./hello-world.sh ${config.name} ${config.dayOfWeek}"
}