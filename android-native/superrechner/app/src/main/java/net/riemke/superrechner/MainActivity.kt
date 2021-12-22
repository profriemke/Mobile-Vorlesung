package net.riemke.superrechner

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val b1 =  findViewById<Button>(R.id.b1)
        val b2 =  findViewById<Button>(R.id.b2)
        val b3 =  findViewById<Button>(R.id.b3)
        val b4 =  findViewById<Button>(R.id.b4)
        val b5 =  findViewById<Button>(R.id.b5)
        val b6 =  findViewById<Button>(R.id.b6)
        val b7 =  findViewById<Button>(R.id.b7)
        val b8 =  findViewById<Button>(R.id.b8)
        val b9 =  findViewById<Button>(R.id.b9)
        val b0 =  findViewById<Button>(R.id.b0)
        val beq =  findViewById<Button>(R.id.beq)
        val bplus =  findViewById<Button>(R.id.bplus)
        val bmin =  findViewById<Button>(R.id.bmin)
        val ergebnis = findViewById<TextView>(R.id.ergebnis)

        var n1:Int = 0
        var n2:Int = 0
        var operand:Int=1
        var operation="nix"

        fun addOperand(zahl:Int) {
           if(operand ==1){
               n1=zahl
                ergebnis.text=n1.toString()
           }else{
               n2=zahl
               ergebnis.text=n2.toString()
           }

        }

        ergebnis.text="0"

        bplus.setOnClickListener{
            operand=2
            ergebnis.text="0"
            operation="plus"
        }
        bmin.setOnClickListener{
            operand=2
            ergebnis.text="0"
            operation="minus"
        }

        beq.setOnClickListener{
            if (operation=="plus"){
                ergebnis.text=(n1+n2).toString()
                operand=1
                operation="nix"
            }
            if (operation=="minus"){
                ergebnis.text=(n1-n2).toString()
                operand=1
                operation="nix"
            }
        }


        b1.setOnClickListener{
            addOperand(1)
        }

        b2.setOnClickListener{
            addOperand(2)
        }

        b3.setOnClickListener{
            addOperand(3)
        }
        b4.setOnClickListener{
            addOperand(4)
        }
        b5.setOnClickListener{
            addOperand(5)
        }
        b6.setOnClickListener{
            addOperand(6)
        }
        b7.setOnClickListener{
            addOperand(7)
        }
        b8.setOnClickListener{
            addOperand(8)
        }
        b9.setOnClickListener{
            addOperand(9)
        }
        b0.setOnClickListener{
            addOperand(0)
        }
    }
}