fun main(args: Array<String>) {
    val n = readln().toInt()
    
    when {
        n % 2 == 0 -> {
            println("${n} is even")
        }
        else -> {
            println("${n} is odd")
        }
    }
}